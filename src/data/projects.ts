export type TProject = {
    customHeight: number, 
    customWidth: number,
    imgSrc: string,
    title: string, 
    descriptionParagraphs: string[],
    liveLink?: string,
    repoLink: string,
    skills: string[],
    direction: 'direct' | 'reverse'
}

export const projects: TProject[] = [
    { 
        imgSrc: '/calon-website.png', 
        title: 'Calon - Digital Marketing Agency Landing Page', 
        descriptionParagraphs: 
        ['Created a High-speed and conversion-focused landing page for a Brazilian digital marketing agency.', 
        'I also crafted the copywriting for the page and ensured its deployment to production, making it readily accessible within a cloud environment.'], 
        skills: ['HTML', 'CSS Modules', 'Next.Js', 'TypeScript'], 
        liveLink: 'https://calon-website.pages.dev/',
        repoLink: 'https://calon-website.pages.dev/',
        direction: 'direct',
        customHeight: 400,
        customWidth: 330
    },
    {
        imgSrc: '/smartcatcher.png',
        title: 'Smart Catcher - A.I Surveillance Startup',
        descriptionParagraphs: [
            `This is a SaaS project for a UK based start up i worked for some time. The idea of the product was really nice, and I was able to contribute in every aspect of it's development, from the Golang Backend, to the AWS infrastructure and the React Frontend.`,
            `Unfortunately, the investors decided to shut down the development of the project, and I am not allowed to share neither the code nor the project's appearence, but I can show the Landing page :)`
        ],
        skills: ['Next.js', 'TypeScript', 'Golang', 'AWS', 'Tailwind', 'Material UI'],
        liveLink: 'https://smartcatcher.vercel.app/',
        repoLink: 'https://github.com/danielflorencio/scatcher-website',
        direction: 'reverse',
        customHeight: 220,
        customWidth: 400
    }
   
//     { imgSrc: '/chatbot-app.png', 
//     title: 'Chatbot micro SaaS Project', 
//     descriptionParagraphs: 
//     ["This is a full-stack application I'm currently building on my own to automate conversations, increase sales, and reduce costs with attendants of companies in multiple industries.", 
//     'It already has a complete JWT Authentication system, a complete messaging functionality which persists data in the database, with more features and improvements coming in the future.'],
//     skills: ['React', 'TypeScript', 'Material UI', 'Node.Js', 'Express.Js', 'MongoDB', 'Docker', 'Cypress', 'Jest', 'React Testing Library'], 
//     liveLink: 'https://github.com/danielflorencio/chatbot-monorepo',
//     repoLink: 'https://github.com/danielflorencio/chatbot-monorepo',
//     direction: 'reverse',
//     customHeight: 200,
//     customWidth: 400
// },
]