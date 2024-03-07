import Card from '../ui/card'

const TeamTab = () => {
  return (
    <Card className="mt-5 space-y-5">
      <p className="font-semibold text-2xl">Team</p>
      <div className="space-y-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem,
          quod voluptatibus magni nemo ab? Totam voluptate distinctio voluptatum
          nemo quidem placeat error fugit! Obcaecati, numquam tempora? Quos,
          maxime commodi!
        </p>
        <Member name="John Smith" />
        <Member name="Elina Williams" />
        <Member name="John Doe" />
      </div>
    </Card>
  )
}

const Member = ({ name }: { name: string }) => {
  return (
    <div className="rounded-lg bg-[#E8F4FD] p-2.5 grid grid-cols-1 md:gap-5 md:grid-cols-6 items-center">
      <div className="flex flex-col items-center col-span-1">
        <img
          className="rounded-lg"
          src={`https://i.pravatar.cc/150?u=${name}`}
          alt="member photo"
          height={100}
          width={100}
        />
        <p className="font-semibold mt-2">{name}</p>
        <p className="font-medium text-[.9rem] mt-1 text-[#788F9B]">CEO</p>
      </div>
      <div className=" col-span-5 mt-5 md:mt-0">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
          fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
          nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
          neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
          quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
          dolor est ipsum. Malesuada etiam mi gravida praesent interdu
        </p>
      </div>
    </div>
  )
}

export default TeamTab
