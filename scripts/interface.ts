console.log(`interface.ts`);

interface ProfileData {
    name: Name;
    image: Image;
    description: string;
    descContinue: string;
    contacts: Contact[];
    education: Education[];
    xp: XP[];
};

interface Name {
    first: string;
    last: string;
}

interface Image {
    src: string;
    alt: string;
}

interface Contact {
    name: string;
    itemprop? : string;
    href: string;
    content: string;
}

interface Education {
    school: string;
    title: string;
    year: number;
}

interface XP {
    title: string;
    level: string;
}