import Button from '@mui/material/Button';
import Link from 'next/link';

interface INavLink {
  lable: string;
  link: string;
}

const NavLink = ({ lable, link }: INavLink) => {
  return (
    <Link href={link}>
      <Button>
        {lable}
      </Button>
    </Link>
  );
};

export default NavLink;
