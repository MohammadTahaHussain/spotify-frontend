import Head from "next/head"
import Navbar from "@/components/Navbar"

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Spotify - Home</title>
            </Head>
                <Navbar/>
            <div className="bg-black min-h-screen py-10 px-2">
                <div className="max-w-[600px] rounded-lg py-2 m-auto bg-[#2a2a2a] px-5 text-white text-lg">
                    <h1 className="text-4xl text-white">What is spotify?</h1>
                    <div className="my-2">
                        <iframe className="max-w-[564px] w-full" height="317" src="https://www.youtube.com/embed/j8L5ySUufdE" title="What is Spotify" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <p className="my-2">
                        Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world.
                    </p>
                    <p className="my-2">
                        Basic functions such as playing music are totally free, but you can also choose to upgrade to Spotify Premium.
                    </p>

                    <div>
                        Whether you have Premium or not, you can:
                        <ul className="list-inside list-disc">
                            <li>Get recommendations based on your taste</li>
                            <li>Build collections of music and podcasts</li>
                            <li>And more!</li>
                        </ul>
                    </div>

                    <p className="my-2">Spotify is available across a range of devices, including computers, phones, tablets, speakers, TVs, and cars, and you can easily transition from one to another with <a href="https://support.spotify.com/us/article/spotify-connect/" className="underline " target="_blank"> Spotify Connect</a>.</p>

                    <h2 className="text-2xl mt-4 mb-2">
                        Can I keep music from Spotify?
                    </h2>
                    <p>Spotify only gives access to music and podcasts through our apps. Our licensing means there's no way to export our content outside of the app.</p>

                </div>
            </div>
        </>
    )
}

export default HomePage