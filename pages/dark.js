import { Fragment } from "react";
import NextImage from "next/image";
import Link from "next/link";

export default function Dark() {
    return (
        <div className="h-screen bg-[#27252C] flex justify-center items-center">
            <div>
                <Link href={"/light"}>
                    <NextImage
                        src={"/Dark button.png"}
                        width={220}
                        height={220}
                        className="cursor-pointer"
                    />
                </Link>
            </div>
        </div>
    );
}
