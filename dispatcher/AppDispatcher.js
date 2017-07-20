import { Dispatcher  } from 'flux';
import { getStore, getPageData, getMoreItems } from '../actions/actions';

const AppDispatcher = new Dispatcher();

AppDispatcher.register(payload => {
    
    let action = payload.action;

    switch(actions) {

        case 'get-app-store':
            getStore();
            break;
        
        case 'get-page-data':
            getPageData(payload.page_slug, payload.post_slug);
            break;

        case 'get-more-items':
            getMoreItems();
            break;

        default:
            return true;

    }

    return true;
});

export default AppDispatcher;