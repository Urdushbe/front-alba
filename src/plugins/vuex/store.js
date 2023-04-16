import {createStore} from "vuex";
import user from "@/plugins/vuex/user";
import job from "@/plugins/vuex/job";
import category from "@/plugins/vuex/category";

export default createStore({
    modules: {
        user,
        job,
        category,

    }
})