interface GridLayoutProps {
  children: React.ReactNode
}

export const GridLayout: React.FC<GridLayoutProps> = (
  props: GridLayoutProps
) => {
  return (
    <div className="container mx-auto max-w-screen-2xl flex-grow py-8 lg:px-28 md:px-10 sm:px-5 px-0">
      <div className="grid grid-cols-12 lg:gap-8">{props.children}</div>
    </div>
  )
}

interface GridItemFourProps {
  children: React.ReactNode
}

export const GridItemFour: React.FC<GridItemFourProps> = (
  props: GridItemFourProps
) => {
  return (
    <div className="lg:col-span-4 md:col-span-12 col-span-12">
      {props.children}
    </div>
  )
}

interface GridItemEightProps {
  children: React.ReactNode
}

export const GridItemEight: React.FC<GridItemEightProps> = (
  props: GridItemEightProps
) => {
  return (
    <div className="lg:col-span-8 md:col-span-12 col-span-12">
      {props.children}
    </div>
  )
}
