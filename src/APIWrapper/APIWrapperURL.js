export default class APIWrapperURL{
    static get API_MOCK(){
        return "http://163.44.165.115:8000";
    }
    static get API_STAGING_VER1(){
        return "http://35.165.218.169:3000";
    }
    static get API_STAGING(){
        return "http://13.115.152.237:3000";
    }
    static get API_URL(){
        return APIWrapperURL.API_STAGING;
    }

}