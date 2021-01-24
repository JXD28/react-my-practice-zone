import { useEffect, useState } from 'react';
import { dealPath } from '../../../../config/menuConfig';

function useGetMenuKey(props) {
    const [selectedKey, setSelectedKey] = useState(null);
    const { pathname } = props.history.location;
    useEffect(() => {
        const path = pathname.split('/')[1];
        const selectedKey = dealPath(path);
        setSelectedKey(selectedKey);
    }, [pathname]);

    return selectedKey;
}

export default useGetMenuKey;
