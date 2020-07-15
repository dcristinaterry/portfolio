import React from "react"

const Blogs = () => {
    return (
        <section className="md:w-1/3  border-l-2 border-orange-920 m-16" >
            <h2 className="text-gray-900 font-megrim text-4xl text-center font-extrabold pb-4 "  > My Blogs</h2>

            <div className="container md:m-10">
                <a href="https://medium.com/@dianacristinaterry/javascript-callbacks-closures-call-stack-callback-queue-and-oh-wait-event-loops-72be44284b18?source=friends_link&sk=db8b08c44108fda1aa50a5c5390996a1" target="_blank" rel="noopener noreferrer">

                    <div className=" mb-3 no-underline bg-white transition shadow-lg hover:shadow hover:-translateY-sm" >
                        <img className="object-cover object-center  rounded  "
                            src="./assets/ss-callbacksBlog.png" />
                    </div>
                </a>
                <a href="https://medium.com/@dianacristinaterry/heads-and-tails-41455aba2aba" target="_blank" rel="noopener noreferrer">

                    <div className=" no-underline bg-white transition shadow-lg hover:shadow hover:-translateY-sm" >
                        <img className="object-cover object-center  rounded  "
                            src="./assets/ss-headTailsBlog.png" />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Blogs;