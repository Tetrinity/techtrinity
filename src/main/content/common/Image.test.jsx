import React from "react";
import { shallow } from "enzyme";

import Image from "./Image";

describe("Image", () => {
    let props;
    let mountedComponent;

    const image = () => {
        if (!mountedComponent){
            mountedComponent = shallow(<Image {...props}/>)
        }

        return mountedComponent;
    }

    beforeEach(() => {
        props = {}
        mountedComponent = undefined;
    })
    
    it("should not render if the file name has not been provided", () => {
        expect(image().find("div").length).toEqual(0);
    })
})