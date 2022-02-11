import { error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import {defaults} from '@pnotify/core';

function notification(text){
    defaults.delay = 600;
    return error({
        text,
    });
}

export default notification;