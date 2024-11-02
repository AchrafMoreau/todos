import { NextApiRequest, NextApiResponse } from "next";


export async function DELETE(req:NextApiRequest, res:NextApiResponse){
    if(req.method === "DELETE"){
        console.log("this's the id im looking for :-> ", req)
    }else{
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}