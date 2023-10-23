import infos from "./infos-schema";
import infosController from "./infos-controller.js";

const plugin = {
    name: 'infos-v1-routes',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/infos",
                handler: infosController.getInfos
            },
        ])
    }
};

export default plugin;