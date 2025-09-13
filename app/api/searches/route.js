import { NextResponse } from "next/server";
import { getSearches } from "../search/route";

export async function GET(){
   try {
     return NextResponse.json(
        {
            searches:getSearches(),
            success:true,
            message:"fetched success"
        }
    )
   } catch (error) {
     return NextResponse.json(
        {
            
            success:false,
            message:"Not a found"
        }
    )
    
   }
}