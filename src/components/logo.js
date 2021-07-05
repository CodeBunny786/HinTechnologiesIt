/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo.png';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image width={100} height={70} src={logo} sx={{ display: 'flex' }} alt="Hin technologies 質" />
    </Link>
  );
}
