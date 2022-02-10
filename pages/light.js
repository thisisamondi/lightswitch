import { Fragment } from "react";
import NextImage from "next/image";
import Link from "next/link";

export default function Dark() {
    return (
        <div className="h-screen bg-white flex justify-center items-center">
            <div>
                <Link href={"/dark"}>
                    <NextImage
                        src={"/Light button.png"}
                        width={220}
                        height={220}
                        className="cursor-pointer"
                    />
                </Link>
            </div>
        </div>
    );
}
