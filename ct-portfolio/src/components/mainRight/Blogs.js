import React from "react"

const Blogs = () => {
    return (
        <section className="md:w-1/3  " >

            <a href="https://medium.com/@dianacristinaterry/javascript-callbacks-closures-call-stack-callback-queue-and-oh-wait-event-loops-72be44284b18?source=friends_link&sk=db8b08c44108fda1aa50a5c5390996a1">

                <div className="bg-blue-100 box-border m-32 no-underline bg-white transition shadow-lg hover:shadow hover:-translateY-sm" >
                <img className="object-cover object-center  rounded  "
                    src="./assets/ss-callbacksBlog.png" />
                </div>
            </a>
            <a href="https://medium.com/@dianacristinaterry/heads-and-tails-41455aba2aba">

                <div className="bg-blue-100 box-border  m-32 no-underline bg-white transition shadow-lg hover:shadow hover:-translateY-sm" >
                <img className="object-cover object-center  rounded  "
                    src="./assets/ss-headTailsBlog.png" />
                </div>
            </a>
        </section>
    )
}

export default Blogs;