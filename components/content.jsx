const Content = () => {
    return (
        <>
            <section className="bg-blue-600  mt-20 content flex flex-col items-center">
                <div className=" content flex flex-col items-center justify-center gap-8" id="content">
                    <span className="text-green-500">TESTIMONIAL</span>
                    <h2 className="text-4xl text-white">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</h2>
                    <img src="https://s3-alpha-sig.figma.com/img/4e26/b8d0/82e79b0ed46b43e7d015fc9e9cc46433?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cHHEzUv7aZbryMv~v5ILY6qouG9m2milxgvlIumyLUgrfcafUhyZH7pvw9~moydKIyYYmLUPwDtT0KXUEfAC6FfNdkCKIhFOCdHEugN5-KV62hkb5gGMl2JjCqXMOBAlDKv7kZ-5SQxr~wRb0~yFjdwo9qWjLjpyRFcwQumA3KSIeo7QPUGjNmZD~KRCVEfbeXcdEIwIjgHEOGDh7tvjXtjF4wRnwBRJIbbfVddGUC8o4Vv0WPM4KNKP8CwTwQ84UefOL7D5B32pg7SJiIu-KIudOm1DSlimYXdqXWqj7hYfRr7cZQJc4MKX9NsN-2wyJWYUxT758GCRw3BNSIKzvQ__" alt="" className="rounded-full ml-auto mr-auto"/>
                    <ul>
                        <li className="text-white">Ian Klein</li>
                        <li className="text-slate-400">Digital marketer</li>
                    </ul>
                </div>
            </section>
        </>
    )
}
export default Content;