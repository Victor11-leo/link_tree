import { v } from 'convex/values'
import {mutation, query} from '../_generated/server'
import { error } from 'console'
import { availableMemory } from 'process'

export const getUserSlug = query({
    args:{userId:v.string()},
    returns: v.string(),
    handler:async({db},args) => {
        const usernameRecord = await db
        .query("usernames")
        .withIndex("by_user_id",(q) => q.eq("userId",args.userId))
        .unique()

        return usernameRecord?.username || args.userId
    }
})

export const checkUsernameAvailability = query({
    args:{username:v.string()},
    returns:v.object({
        available:v.boolean(),
        error:v.optional(v.string())
    }),
    handler: async({db},args) => {
        const usernameRegex = /^[a-zA-Z0-9_-]+$/
        if (!usernameRegex.test(args.username)){
            return {
                available:false,
                error:"Username can only contain letters, numbers, hyphens and underscores"
            }
        }

        if (args.username.length < 3 || args.username.length > 30) {
            return {
                available:false,
                error:"Username must be between 3 and 30 characters"
            }
        }

        const existingUsername = await db
        .query("usernames")
        .withIndex("by_username", (q) => q.eq("username",args.username))
        .unique()

        return {available: !existingUsername}
    }
})

export const setUsername = mutation({
    args:{
        username:v.string(),
        userId:v.string(),
    },
    returns: v.object({
        success:v.boolean(),
        error:v.optional(v.string())
    }),
    handler: async ({db},args) => {                
        const usernameRegex = /^[a-zA-Z0-9_-]+$/
        if (!usernameRegex.test(args.username)){
            return {
                success:false,
                error:"Username can only contain letters, numbers, hyphens and underscores"
            }
        }

        if (args.username.length < 3 || args.username.length > 30) {
            return {
                success:false,
                error:"Username must be between 3 and 30 characters"
            }
        }

        const existingUsername = await db
        .query("usernames")
        .withIndex("by_username", (q) => q.eq("username",args.username))
        .unique()

        if (existingUsername && existingUsername.userId !== args.userId){
            return {success:false, error:"Username is already taken"}
        }

        const currentRecord = await db
        .query("usernames")
        .withIndex("by_user_id", (q) => q.eq("userId",args.userId))
        .unique()

        if (currentRecord) await db.patch(currentRecord._id,{username:args.username})
        else {
            await db.insert("usernames",{
                userId:args.userId,
                username:args.username
            })
        }
        
        return {success:true}
    }
})