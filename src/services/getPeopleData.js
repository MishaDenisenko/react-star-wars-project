import {URL_IMG_PERSON, GUIDE_IMG_EXTENSION} from "../constants/api";

const getId = (url, category) => url.match(/people\/(\d*)/)[1]

export const getPeoplePageId = (url) => Number(url.match(/page=(\d*)/)[1])
export const getPeopleId = (url) => getId(url, 'people');
export const getPeopleImg = id => URL_IMG_PERSON + '/' + id + GUIDE_IMG_EXTENSION;