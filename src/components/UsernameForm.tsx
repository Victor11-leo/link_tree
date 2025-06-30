'use client'
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {z} from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { AlertCircle, CheckCircle, Copy, ExternalLink, Loader2, User } from "lucide-react";
import { Button } from "./ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Link from "next/link";
import { toast } from "sonner"

const formSchema = z.object({
  username:z
  .string()
  .min(3,"Username must be at least 3 characters")
  .max(30,"Username must be less than 3 characters")
  .regex(
    /^[a-zA-Z0-9_-]+$/,
    "Username can only contain letters, numbers, hyphens and underscores"
  ),
});

const UsernameForm = () => {
  const {user} = useUser()
  const baseUrl = 'http://localhost:3000'
  const [debouncedUsername,setDebouncedUsername] = useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      username:""
    }
  })

  

  const watchedUsername = form.watch("username")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedUsername(watchedUsername)
    },500)

    return () => clearTimeout(timer)
  },[watchedUsername])

  const currentSlug = useQuery(
    api.lib.usernames.getUserSlug,
    user?.id ? {userId:user.id} : "skip"
  )

  const availabilityCheck = useQuery(
    api.lib.usernames.checkUsernameAvailability,
    debouncedUsername.length >= 3 ? {username:debouncedUsername} : "skip"
  )

  const setUsername = useMutation(api.lib.usernames.setUsername)

  const getStatus = () => {
    if (!debouncedUsername || debouncedUsername.length < 3) return null
    if (debouncedUsername !== watchedUsername) return "checking"
    if (!availabilityCheck) return "checking"
    if (debouncedUsername === currentSlug) return "current"
    return availabilityCheck.available ? "available" : "unavailable"  
  }

  const status = getStatus()

  const hasCustomUsername = currentSlug && currentSlug !== user?.id

  const isSubmitDisabled = status !== "available" || form.formState.isSubmitting

  const onSubmit = async (values:z.infer<typeof formSchema>) => {
    if (!user?.id) return;
    try {
      const result = await setUsername({
        username:values.username,
        userId: user?.id        
      })
      if (result.success) form.reset()
      else form.setError("username",{message:result.error})
    } catch {
      form.setError("username",{
        message:"Failed to update username. Please try again"
      })
    } 
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Customize your link</h3>
        <p className="text-gray-600 text-sm">
          Choose a custom username for your link-in-bio page. This will be your public URL
        </p>
      </div>

      {/* Current username status */}
      {hasCustomUsername && (
        <div className="bg-green-50 border-green-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-green-600"/>
              <span className="text-sm font-medium text-green-900">Current username</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-green-800 bg-white px-2 py-1 rounded text-sm">
                {currentSlug}
              </span>
              <Link
              href={`/u/${currentSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors"
              >
                <ExternalLink/>
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* URL preview */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">
            Link preview
          </span>
        </div>
        <div className="flex items-center">
          <Link
          href={`/u/${currentSlug}`}
          target="_blank"
              rel="noopener noreferrer"
              className="flex-1 font-mono text-gray-800 bg-white px-3 py-2 rounded-l border-y border-l hover:bg-gray-50 transition-colors truncate"
          >
            {baseUrl}/u/{currentSlug}
          </Link>
          <Button
          onClick={() => {
            navigator.clipboard.writeText(`${baseUrl}/u/${currentSlug}`)
            toast.success("Copied to clipboard")
          }}
          title="Copy to clipboard"
          >
            <Copy/>
          </Button>
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        >
          <FormField
          control={form.control}
          name="username"
          render={({field}) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                  placeholder="desired username"
                  {...field}
                  className="pr-10"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {status == "checking" && (
                      <Loader2 className="w-4 h-4 animate-spin text-gray-400"/>
                    )}
                    {status == "available" && (
                      <CheckCircle className="w-4 h-4 text-green-500"/>
                    )}
                    {status == "current" && (
                      <User className="w-4 h-4 text-blue-500"/>
                    )}
                    {status == "unavailable" && (
                      <AlertCircle className="w-4 h-4 text-red-500"/>
                    )}
                  </div>
                </div>
              </FormControl>
              <FormDescription>
                You username can contain letters, numbers,hyphens and underscores
              </FormDescription>
              {status == "available" && (
                <p className="text-sm text-green-600">Username is available !</p>
              )}
              {status == "current" && (
                <p className="text-sm text-blue-600">This is your current username!</p>
              )}
              {status == "unavailable" && (
                <p className="text-sm text-red-600">{availabilityCheck?.error || "Username is already taken"}</p>
              )}
              <FormMessage/>
            </FormItem>
          )}
          />
          <Button
          type="submit"
          className="w-full disabled:opacity-50"
          disabled={isSubmitDisabled}
          >
            {form.formState.isSubmitting ? (
              <>
              <Loader2 className="w-4 h-4 animate-spin"/>
              Updating
              </>
            ):(
              "Update username"
            )

            }

          </Button>
        </form>
      </Form>
    </div>
  )
}

export default UsernameForm