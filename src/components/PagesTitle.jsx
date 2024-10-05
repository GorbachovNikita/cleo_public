import {useLocation} from "react-router-dom";
import {useEffect} from "react";


const PageTitle = ({ title }) => {

    const location = useLocation();

    const pagesTitle = {

        '/': 'Cards',

        '/authorization': 'Authorization',
        '/cards': 'Cards',
        '/cart': 'Cart',
        '/cleonews': 'Cleonews',
        '/faq': 'FAQ',
        '/profile': 'Profile',
        '/rules': 'Rules',
    }

    title = pagesTitle[location.pathname]

    if(title === undefined) {
        title = 'Page not found'
    }

    useEffect(() => {
        document.title = title;
    }, [location, title]);

    return null;
}

export default PageTitle;