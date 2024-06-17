READMEs are the first stop of technical documentation for SCS engineers.

A well design readme is like a user manual

It should provide the reader/engineer with enough information to get started on their work, such as:

- An overview of what the repo is about

- the source code organization

- Deployment pipeline details info - How what each of the workflows does

- How the code work / How to use it

- How to contribute to the source code repo

- etc.

## Contribution <a id="contribution"></a>

> [!CAUTION]
>
> - This repo has one branch: **main**
> - **This repo DO NOT allow direct push to main branch.**
> - _Changes should be made on a feature branch only then merged to main after review and approval_

> Contributors:

<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/Mulambo97">
            <img src="https://avatars.githubusercontent.com/u/73206766?v=4" width="100;" alt="Mulambo97"/>
            <br />
            <sub><b>Odon Mulambo</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/michael-neis">
            <img src="https://avatars.githubusercontent.com/u/90716315?v=4" width="100;" alt="michael-neis"/>
            <br />
            <sub><b>Michael Neis</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/YannMjl">
            <img src="https://avatars.githubusercontent.com/u/28827971?v=4" width="100;" alt="YannMjl"/>
            <br />
            <sub><b>Yann Mulonda</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: contributors -end -->

#### Setup SSH connect between ICF Corp-GitHub

More info on [how to set up SSH from Source Code management to Local machine](https://medium.com/p/d805bb2ed28b)

> [!TIP]
> Makes sure you configure and authorizse SSO on your SSH authentication key like so:

![Configure & Authorize SSO](./images/configureSSO.gif)

#### Clone Repo & Setup feature Branch

For Windowns → Go to “Git Bash”, Right-click and “Run as Administrator”.<br>
For Mac and Linux → Go to the terminal.<br>
Run the following commands to clone and create your feature branch:

```bash
git clone git@github.com:Mulambo97/node-js-demo.git
cd node-js-demo
git checkout -b dev
```

> [!IMPORTANT]  
> Make sure your _feature/_ branch name following the naming standard above.
> This is used for automated testing and [validation in CI with GitHub Actions](https://github.com/michael-neis/node-js-demo/actions).

After making the necessary code changes, submited a pull request from your feature branch
to main branch for review and approval before shipping the new changes to CD pipeline.

> [!WARNING]  
> To maintain a clean repo, automatic deletion of feature branches upon PR approval is enable on this repo.
> Your branches automatically deleted after pull requests are merged into Main branch.
