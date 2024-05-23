import Image from 'next/image';

type CardProps = {
  name: string;
  title: string;
  img: string;
};

export function TeamSection() {
  return (
    <section className="container mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-[100px] px-[100px] pb-[150px] pt-[100px]">
      <div className="flex flex-col items-center gap-4 text-center">
        <h3 className="font-heading text-[2.3rem]/[1.8rem] font-medium">Committee Formation</h3>
        <p className="text-[1.5rem]/[1.5rem] font-light mt-4">Let's Help Each Other</p>
      </div>
      <TeamCard name="SME 6" title="Hitachi" img="/images/teams/richard-x.svg" />

      <div className="flex gap-[130px]">
        <TeamCard name="SME 1" title="Zoth" img="/images/teams/richard-x.svg" />
        <TeamCard name="SME 2" title="E-Verified" img="/images/teams/richard-x.svg" />
        <TeamCard name="SME 3" title="Red Bull" img="/images/teams/richard-x.svg" />
        <TeamCard name="SME 4" title="Neeram" img="/images/teams/richard-x.svg" />
      </div>
      <TeamCard name="SME 5" title="XCAVATE" img="/images/teams/richard-x.svg" />
    </section>
  );
}

const TeamCard = ({ name, title, img }: CardProps) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex items-center justify-center">
        <Image src={img} alt="team" width={100} height={100} priority />
      </div>
      <div className="flex flex-col items-center gap-2 text-[1rem]/[1.5rem]">
        <dt className="font-light">{name}</dt>
        <dd>{title}</dd>
      </div>
    </div>
  );
};
