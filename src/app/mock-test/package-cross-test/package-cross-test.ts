import { Component } from "@angular/core"
import { PackageCrossList } from "../../features/packages/components/package-cross-list/package-cross-list";
import { DiscoverPackageDefaultOne } from "../../presets/discover-package-default-one/discover-package-default-one";



@Component({
    template: `<package-cross-list/> <discover-package-default-one/>`,
    imports: [PackageCrossList, DiscoverPackageDefaultOne]
})
export class PackageCrossTest {

}