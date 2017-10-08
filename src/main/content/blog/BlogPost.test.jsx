import React from "react";
import { shallow } from "enzyme";

import BlogPost from "./BlogPost";
import Timestamp from "./Timestamp";

import Title from "../common/Title";

describe("BlogPost", () => {
    let props;
    let mountedComponent;

    const blogPost = () => {
        if (!mountedComponent){
            mountedComponent = shallow(<BlogPost {...props}/>)
        }

        return mountedComponent;
    }

    beforeEach(() => {
        props = {}
        mountedComponent = undefined;
    })

    it("should render a loading message if no data is available", () => {
        const loadingText = blogPost().find(".loading").text();
        expect(loadingText).toEqual("Loading...");
    })

    it("should render the various sections of the blog post", () => {
        props.json = {
            title: {
                rendered: "Test Post"
            },
            content: {
                rendered: "Test Content"
            },
            date: "some date"
        }

        const blogPostDiv = blogPost().find(".blogPost");

        expect(blogPostDiv.find(Title)).not.toBeNull();
        expect(blogPostDiv.find(Timestamp)).not.toBeNull();
        expect(blogPostDiv.find(".content")).not.toBeNull();

        expect(blogPostDiv.find(Title).props().text).toEqual(props.json.title.rendered);
        expect(blogPostDiv.find(Timestamp).props().time).toEqual(props.json.date);
    });
})