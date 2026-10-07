<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use Embla for the featured-work carousel so touch, keyboard, and responsive slide behavior stay reliable.
- Homepage motion uses framer-motion (MotionConfig reducedMotion=user); decorative 3D image imports live only in src/lib/site-media.ts so they can be swapped in one place. Why: single motion lib + easy asset replacement.
