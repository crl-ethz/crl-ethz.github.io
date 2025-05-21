# CRL robotics project website
This repo is based on [al-folio](https://github.com/alshedivat/al-folio) theme for Jekyll.

# How to publish a new project
1. Local set up by following the instructions [here](https://github.com/alshedivat/al-folio/blob/main/INSTALL.md#local-setup-using-docker-recommended). We recommend using `VS Code` with `Development Containers` for local development.
2. Append your project to the `_bibliography/papers.bib` file.
  A minimal entry looks like this:
    ```bibtex
    @article{project_abbreviation,
      title={project_title},
      author={supervisor_names},
      year={2025},
      abstract={short_description_of_your_project},
      pdf={example_pdf.pdf},
      website={external_link_to_the_project},
      preview={example_image_of_your_project},
      selected={true},
    }
    ```
    Note:
    - `project_abbreviation` should be unique and not contain any special characters (e.g. `@`, `#`, etc.)
    - `Supervisors' names` should be an `and`-separated list of the supervisors' names. For example: `Last, First and Last, First`, or `First Last and First Last`. You may want to add links to the supervisors' personal website. You can do so by adding your information in the `_data/coauthors.yml` file, as shown [here](https://github.com/alshedivat/al-folio/blob/main/CUSTOMIZE.md#adding-a-new-publication). For example:
      ```yaml
      "cheng":
        - firstname: ["Jin", "J.",]
          url: https://jin-cheng.me/
      ```
      Note: the last name in lowercase will be used to match the name in the bibtex file.

    - `abstract` is optional but highly recommended. It can be a short description of your project (1-2 sentences).
    - `pdf` is optional but highly recommended. You may provide more detailed description of your project in a PDF file. You can put the PDF file in the folder `assets/pdf`.
    - `website` is optional, it can be a link to [SiROP](https://www.sirop.org/) if you have already created a project there. If you don't want to publish your project on SiROP, we also provide some instructions to create a blog page on this website later.
    - `preview` is optional but highly recommended. You may put the image in the folder `assets/img/publication_preview`.
    - `selected` is should be set to `true` if you want to show the project on the main page. Otherwise, it will be shown in the available projects tab.

    You may check other available option in the `_bibliography/example.bib` file.

1. (Optional) If you want to add a blog page for your project, you can create a new file in the `_posts` folder. The file name should be in the format `YYYY-MM-DD-project_abbreviation.md`. We also provide a template for the blog post in the `_posts` folder. You can use it as a reference. The blog post should contain the following information:
    - `layout`: should be set to `post`.
    - `title`: should be set to the title of your project.
    - `date`: should be set to the date of your project.
    - `description`: should be set to a short description of your project.
    - `tags`: should be set to the tags you want to use for your project.
    - `categories`: should be set to the category you want to use for your project.

    An website will be automatically generated and refered with the permalink `/:project_abbreviation/`. An example website can be seen [https://crl-ethz.github.io/example/](https://crl-ethz.github.io/example/).

    Later, you can link this website to the bib information in the `_bibliography/papers.bib` file by adding the `website` field to your bib entry.

    Regarding what you can do in the `md` file, you may refer to the samples [here](https://github.com/alshedivat/al-folio/tree/main/_posts).

2. Once you have created your post, you can preview the changes on `http://localhost:8080/`.
   If you are certain that all information is correct, you can push the changes to the repository. Within a few minutes, the changes will be live on the actual website.


# Other useful links
Want to learn more about Jekyll? Check out [this tutorial](https://www.taniarascia.com/make-a-static-website-with-jekyll/). Why Jekyll? Read [Andrej Karpathy's blog post](https://karpathy.github.io/2014/07/01/switching-to-jekyll/)! Why write a blog? Read [Rachel Thomas blog post](https://medium.com/@racheltho/why-you-yes-you-should-blog-7d2544ac1045).

For installation and deployment details please refer to [INSTALL.md](INSTALL.md).

For customization details please refer to [CUSTOMIZE.md](CUSTOMIZE.md).

## License

The theme is available as open source under the terms of the [MIT License](https://github.com/alshedivat/al-folio/blob/main/LICENSE).

Originally, **al-folio** was based on the [\*folio theme](https://github.com/bogoli/-folio) (published by [Lia Bogoev](https://liabogoev.com) and under the MIT license). Since then, it got a full re-write of the styles and many additional cool features.
