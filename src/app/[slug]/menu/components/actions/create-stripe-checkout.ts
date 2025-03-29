"use server";

import { ConsumptionMethod } from "@prisma/client";
//import { headers } from "next/headers";
import Stripe from "stripe";

//import { db } from "@/lib/prisma";
import { CartProduct } from "../../context/cart";
import { removeCpfPunctuation } from "../../helpers/cpf";

interface createStripeCheckoutInput {
  products: CartProduct[];
  orderId: number;
  slug: string;
  consumptionMethod: ConsumptionMethod;
  cpf: string;
}
export const createStripeCheckout = async ({
  orderId,
  products,
  //slug,
  consumptionMethod: ConsumptionMethod,
  cpf,
}: createStripeCheckoutInput) => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Stripe secret key not found");
  }
  //const origin = (await headers()).get("origin") as string;
  // const productsWithPrices = await db.product.findMany({
  //   where: {
  //     id: {
  //       in: products.map((product) => product.id),
  //     },
  //   },
  // });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia",
  });

  const searchParams = new URLSearchParams();
  searchParams.set("consumptionMethod", ConsumptionMethod);
  searchParams.set("cpf", removeCpfPunctuation(cpf));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",

    metadata: {
      orderId,
      // success_url: `${origin}/${slug}/orders?${searchParams.toString()}`,
      // cancel_url: `${origin}/${slug}/orders?${searchParams.toString()}`,
    },

    line_items: products.map((product) => ({
      price_data: {
        currency: "brl",
        product_data: {
          name: product.name,
          images: [product.imageUrl],
        },

        unit_amount: parseInt(String(product.price * 100)),

        // unit_amount: productsWithPrices.find((p) => p.id === product.id)!.price,
      },
      quantity: product.quantity,
    })),
  });
  return { sessionId: session.id };
};
