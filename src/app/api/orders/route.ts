import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// FETCH ALL ORDERS
export const GET = async (req: NextRequest) => {

    const session = await getAuthSession()

    if (session) {

        try {
            const products = await prisma.product.findMany({
                where: {
                    ...(cat ? { catSlug: cat } : { isFeatured: true }),
                },
            });
            return new NextResponse(JSON.stringify(products), { status: 200 });
        } catch (err) {
            console.log(err);
            return new NextResponse(
                JSON.stringify({ message: "Something went wrong!" }),
                { status: 500 }
            );
        };
    } else {
        return new NextResponse(
            JSON.stringify({ message: "You are not authenticated!" }),
            { status: 401 }
        );

    }
}
export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const product = await prisma.product.create({
            data: body,
        });
        return new NextResponse(JSON.stringify(product), { status: 201 });
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }),
            { status: 500 }
        );
    }
};