import { Component } from "@angular/core"
import { PackageCrossList } from "../../features/packages/components/package-cross-list/package-cross-list";
import { DiscoverPackageDefaultOne } from "../../presets/discover-package-default-one/discover-package-default-one";
import { ServiceCrossList } from "../../features/services-facilities/components/service-cross-list/service-cross-list";



@Component({
    template: `<package-cross-list/> <discover-package-default-one/> <service-cross-list/>`,
    imports: [PackageCrossList, DiscoverPackageDefaultOne, ServiceCrossList]
})
export class PackageCrossTest {

}