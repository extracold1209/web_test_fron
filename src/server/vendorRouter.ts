import { Router } from 'express';
import { PathLike } from 'fs';
import path from 'path';

export interface IVendorRouterOptions {
    mappingName?: string;
    libraryBasePath?: PathLike;
    libraryNames?: string[];
}

const defaultOptions = {
    mappingName: '/node_modules',
    libraryBasePath: path.resolve('node_modules'),
    libraryNames: [],
}

export default (options?: IVendorRouterOptions) => {
    const { mappingName, libraryBasePath, libraryNames }
        = Object.assign(defaultOptions, options);

    const nodeModulesRouter = Router();
    const baseRouteName = mappingName.startsWith('/') ? mappingName : `/${mappingName}`;

    nodeModulesRouter.get(`${baseRouteName}/:libraryName*`,
        (req, res) => {
            const libraryPathVariable = req.params.libraryName;
            const underLibraryPath = req.params[0];

            try {
                if (libraryNames.includes(libraryPathVariable)) {
                    res.sendFile(
                        path.join(
                            libraryBasePath,
                            libraryPathVariable,
                            path.normalize(underLibraryPath),
                        ),
                    );
                } else {
                    res.sendStatus(404);
                }
            } catch (e) {
                console.error(e);
                res.sendStatus(404);
            }
        },
    );

    return nodeModulesRouter;
}
