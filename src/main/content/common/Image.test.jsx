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

    it("should not render if the date has not been specified for a non-static file", () => {
        props.name = "example.png";

        expect(image().find("div").length).toEqual(0);
    })

    it("should render if the date has not been specified for a static file", () => {
        props.static = true;
        props.name = "example.png";

        expect(image().find("div").length).toEqual(1);
    })
    
    it("should render if the date has been specified for a non-static file", () => {
        props.date = "2017-05-11";
        props.name = "example.png";

        expect(image().find("div").length).toEqual(1);
    })
})