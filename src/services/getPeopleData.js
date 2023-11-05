import {URL_IMG_PERSON, GUIDE_IMG_EXTENSION} from "../constants/api";


const getId = (url, category) => url.split('/').filter(Number).join();

export const getPeopleId = (url) => getId(url, 'people');
export const getPeopleImg = id => URL_IMG_PERSON + '/' + id + GUIDE_IMG_EXTENSION;