import { useLocation } from "react-router";
import { Home } from "../../pages/home.page";
import { Library } from "../../pages/library.page";
import { Profile } from "../../pages/profile.page";
import { Stories } from "../../pages/stories.page";
import { Stats } from "../../pages/stats.page";
import { Following } from "../../pages/following.page";

const navList = [
    {link: '/', lable:Home},
    {link: '/', lable:Library},
    {link: '/', lable:Profile},
    {link: '/', lable:Stories},
    {link: '/', lable:Stats},
    {link: '/', lable:Following},
]

const NavigationButton = ({link, label, isActive})=>{
    return <a herf={link} style={{ textDecoration:'none', color: isActive ? 'white' : 'black'}}>{label}</a>
}

export const Navigation =()=>{
    const {pathname} = useLocation();
    return navList.map((item)=>
        <NavigationButton
        key={item.lable}
        link={item.link}
        label={item.lable}
        isActive={pathname === item.link}/>
)
}