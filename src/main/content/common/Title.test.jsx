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

    it("should display a large version if the \"large\" prop is set", () => {
        props.large = true;

        expect(title().find(".title").hasClass("largeTitle"));
    })

    it("should display a small version if the \"large\" prop is not set", () => {
        expect(title().find(".title").hasClass("smallTitle"));
    })

    it("should display a separator if the appropriate prop is set", () => {
        props.separator = true;

        expect(title().find(".title").hasClass("separator"));
    })
})