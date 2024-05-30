export type TestimonialType = {
    img: string, 
    name: string,
    paragraphs: string[],
    customStyles?: React.CSSProperties
}

export const testimonialsData: TestimonialType[] = [
    {
        img:'/mateus-profile-pic.png',
        name:'Mateus Sousa',
        paragraphs: [
          "I had already tried with three different people to create a page for my digital agency.",
          "All I had was issues, the page would get loading stutters, and the final results were always overall terrible...", 
          "But Daniel solved it with an ease I'm up until this moment in disbelief hahahahah the page is just Perfect!",
          "I already want to hire him for some other projects, and who knows, we might even become business partners."]
    },
    {
        img:'/philipe.jpg',
        name:'Filipe Hamza',
        paragraphs: [
            "Daniel and I worked together to deliver an AI fullstack software to a UK based client, and I can’t express how great it was to work with him.",
            "He's always been extremely communicative throughout the whole process, and has also been helpful to solve even the issues outside of his scope and comfort zone.",
            "If you’re looking for someone to integrate your team, and you’re reading this right now, wondering if he could be a great addition to your team, I’d advise you to not lose any time.",
            "You certainly wouldn’t want to lose a great talent when you see one, and this is your chance to seize"
        ]
    }
] 