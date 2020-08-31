# PORTFOLIO

## Summary

Welcome to my Portfolio.

## GettingStarted

Project Location

>[Project's GitHub repository](https://github.com/dcristinaterry/portfolio)

## Prerequisites

>NA

## Built With

>* React
>* JavaScrip
>* JSX
>* Tailwind CSS
>* HTML
>* CSS

## Installation

If you want to download this project follow these steps.

To run this application on your local machine follow these steps:

>1. Clone project from github.
>4. run command npm install
>5. run command npm start

## Deployed Link

https://dcristinaterry.github.io/portfolio/

## Code-Snippets

The following is a code snippet showing the use if JSX and the use props for react this react application.
```sh
  return (
     <section className=" bg-gray-100 pt-10 border-t border-orange-920 ">

        <h4 className="text-center text-lg sm:text-2xl lg:text-2xl bg-gray-920 text-orange-920 font-syncopate font-medium p-6 mb-10 text-3xl ">Check out some of my projects</h4>
        <div className=" mx-auto">
            <div className="flex flex-wrap lg:mx-20">
    
                {myProjects.map(item => (
                    <ProjectCard
                        projectName={item.projectName}
                        description={item.description}
                        image={item.image}
                        github={item.github}
                        deploy={item.deploy}
                        technologies = {item.technologies}
                    />
                ))}
    
            </div>
        </div>
    
    </section>
        
    )

```

## Screen shots / gifs

[SS1.png](./SS1.png)
[SS2.png](./SS2.png)


## Author

<img src="https://avatars.githubusercontent.com/u/61372364?" alt="avatar" style="border-radius:20px" width="30"/>

D. Cristina Terry

GitHub: [https://github.com/dcristinaterry/](https://github.com/dcristinaterry/),

LinkedIn: [www.linkedin.com/in/dcristinaterry](www.linkedin.com/in/dcristinaterry)

## License

![license](https://img.shields.io/badge/license-MIT-green)

