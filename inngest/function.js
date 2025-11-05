import { inngest } from "./client";
import prisma   from "@/lib/prisma";
//ingest function to save user data to a database

export const syncUserCreation =inngest.createFunction(
    {id:'sync-user-create'},
    {event:"clerk/user.created"},

    async({event})=>{
        const {data}=event
        await prisma.user.create({
            data:{
                id:data.id,
                email:Date.email_addresses[0].email_address,
                name '${data.frist_name} ${data.last_name}',
                image: data.image_url,
            }
        })
    }
    
)
export