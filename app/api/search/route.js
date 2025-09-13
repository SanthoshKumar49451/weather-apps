import { NextResponse } from "next/server"


let searches=[]

export async function POST(request){

   try {
     const {city}=await request.json()
    if (!city) return NextResponse.json({
        success:false,
        message:"City is needed"
    },{status:400})

    console.log(city)

    return NextResponse.json({
        success:true,
        message:"Added"
    },{
        status:200
    })


   } catch (error) {
     return NextResponse.json({ error: "Failed to fetch weather" }, {
      status: 500,
    })
    
   }

    



}



export function getSearches(){
    return searches;
}

