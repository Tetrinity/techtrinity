import React from "react";
import { shallow } from "enzyme";

import IconLink from "./IconLink";

describe("IconLink", () => {
    let props;
    let mountedComponent;

    const iconLink = () => {
        if (!mountedComponent){
            mountedComponent = shallow(<IconLink {...props}/>)
        }

        return mountedComponent;
    }

    beforeEach(() => {
        props = {}
        mountedComponent = undefined;
    })

    it("should contain the requested link", () => {
        let icon = "test.png";
        let href = "www.example.com"
        let text = "Click me!";

        props = {
            icon: icon,
            href: href,
            text: text
        }
        
        const iL = iconLink().find(".iconLink");
        expect(iconLink).not.toBeNull();
    })
})