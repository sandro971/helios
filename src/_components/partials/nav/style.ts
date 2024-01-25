
// on hover, before is full width and height .1em and color green-300
export const beforeStyle = `
flex
items-center
hover:[&>*:last-child]:height-[.5em]
[&>*:last-child]:flex
[&>*:last-child]:width-full
[&>*:last-child]:ease-in-out
[&>*:last-child]:bg-green-300
[&>*:last-child]:absolute
[&>*:last-child]:bottom-[-.1em]
[&>*:last-child]:duration-1000`

export const linkStyle = `flex
text-green-950
text-sm
items-center
gap-2
font-arial
font-sans-serif
wrap
whitespace-nowrap
px-5
border-l-[.15em]
max-2xl:border-none
max-2xl:rounded-full
border-green-950
h-full`

export const listStyle = `flex
text-center
text-[15px]
items-center
justify-center
wrap
whitespace-wrap
relative
font-arial
font-sans-serif
text-green-950`

export const listMenuStyle = listStyle + `
hover:before:content-['']
before:content-[none]
transition-all
bg-transparent
`

export const subListStyle = listStyle + `
text-sm
hover:text-gray-500
transition-all
transition-[.5s]`

export const subListMenuBurgerStyle = `
flex
w-full
items-center
justify-center
py-3
rounded-full
`

