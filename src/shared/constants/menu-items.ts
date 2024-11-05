export const MenuItems = (userId: string | null) => [
  { title: "Главное", href: "/home" },
  { title: "Подкасты и книги", href: "/not-music" },
  ...(userId ? [{ title: "Коллекция", href: `/collection/${userId}` }] : []),
];
