import React from "react";
import { shallow } from "enzyme";

import Title from "./Title";

describe("Title", () => {
    let props;
    let mountedComponent;

    const title = () => {
        if (!mountedComponent){
            mountedComponent = shallow(<Title {...props}/>)
        }

        return mountedComponent;
    }

    beforeEach(() => {
        props = {}
        mountedComponent = undefined;
    })

    it("should display the passed text", () => {
        let text = "Hello, World!";
        props.text = text;

        const titleText = title().find(".title").text();
        expect(titleText).toEqual(text);
    })

    it("should display a large version if the size prop is set to \"large\"", () => {
        props.size = "large";

        expect(title().find(".title").hasClass("largeTitle"));
    })
    
    it("should display a small version if the size prop is set to \"small\"", () => {
        props.size = "small";

        expect(title().find(".title").hasClass("smallTitle"));
    })

    it("should display a normal version if no size prop has been set", () => {
        expect(title().find(".title").hasClass("mediumTitle"));
    })

    it("should display a separator if the appropriate prop is set", () => {
        props.separator = true;

        expect(title().find(".title").hasClass("separator"));
    })

    it("should not have a bottom margin if the appropriate prop is set", () => {
        props.noSpacer = true;

        expect(title().find(".title").hasClass("noSpacer"));
    })
})