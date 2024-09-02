import { ClassName } from '@fleetwood/types/ClassName';
import MainNav from '../nav/MainNav';
import ParallaxBg from '../ParallaxBg';

const Header = ({className}:ClassName) => {
  return (
    <div className={className}>
      <ParallaxBg />
      <MainNav />
    </div>
  )
}

export default Header