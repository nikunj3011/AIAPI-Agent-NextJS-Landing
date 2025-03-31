'use client'

import { Badge } from "./badge";
import Image from 'next/image';

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Products</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Something new for everyone!
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                "Unforgettable Prints. Unbeatable Quality."
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md overflow-hidden aspect-square mb-2">
                <Image
                  src="https://nikunj3011.github.io/AIAPI-Agent-NextJS-Landing//capjacket.jpg"
                  alt="Logo"
                  width={500}
                  height={650}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl tracking-tight">Hoodies & Winter Caps (Toques)</h3>
              <p className="text-muted-foreground text-base">
                "Knit Your Brand into the Conversation"
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md overflow-hidden aspect-square mb-2">
                <Image
                  src="https://nikunj3011.github.io/AIAPI-Agent-NextJS-Landing//Beanies.jpg"
                  alt="Logo"
                  width={500}
                  height={650}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl tracking-tight">Caps & Beanies</h3>
              <p className="text-muted-foreground text-base">
                "Printed Caps that Elevate Your Brand"
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md overflow-hidden aspect-square mb-2">
                <Image
                  src="https://nikunj3011.github.io/AIAPI-Agent-NextJS-Landing//polo-2.jpg"
                  alt="Logo"
                  width={500}
                  height={650}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl tracking-tight">T-Shirts & Polo Shirts</h3>
              <p className="text-muted-foreground text-base">
                "Office Wear that Reflects Your Brand"
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md overflow-hidden aspect-square mb-2">
                <Image
                  src="https://nikunj3011.github.io/AIAPI-Agent-NextJS-Landing//officewear.jpg"
                  alt="Logo"
                  width={500}
                  height={650}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl tracking-tight">Office Wear</h3>
              <p className="text-muted-foreground text-base">
                "Printed Office Wear that Elevates Your Image"
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md overflow-hidden aspect-square mb-2">
                <Image
                  src="https://nikunj3011.github.io/AIAPI-Agent-NextJS-Landing//corporate-apparel.jpg"
                  alt="Logo"
                  width={500}
                  height={650}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl tracking-tight">Corporate Apparel</h3>
              <p className="text-muted-foreground text-base">
                "Corporate Apparel perfection for the Modern Professional"
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md overflow-hidden aspect-square mb-2">
                <Image
                  src="https://nikunj3011.github.io/AIAPI-Agent-NextJS-Landing//card.jpg"
                  alt="Logo"
                  width={500}
                  height={650}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl tracking-tight">Stickers & Business Cards</h3>
              <p className="text-muted-foreground text-base">
                "Printed Stickers & Business Cards that Bring Your Brand to Life"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };