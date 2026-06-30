import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

import { client } from "@/sanity/lib/client";
import { homeQuery, personQuery, aboutQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export const dynamic = 'force-dynamic';
export const revalidate = 0; // Disable caching to show Sanity updates immediately

export async function generateMetadata() {
  const sanityHome = await client.fetch(homeQuery, {}, { cache: 'no-store' }).catch(() => null);
  const title = sanityHome?.title || home.title;
  const description = sanityHome?.description || home.description;

  return Meta.generate({
    title,
    description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function Home() {
  const sanityHome = await client.fetch(homeQuery, {}, { cache: 'no-store' }).catch(() => null);
  const sanityPerson = await client.fetch(personQuery, {}, { cache: 'no-store' }).catch(() => null);
  const sanityAbout = await client.fetch(aboutQuery, {}, { cache: 'no-store' }).catch(() => null);

  const displayHome = {
    ...home,
    title: sanityHome?.title || home.title,
    description: sanityHome?.description || home.description,
    headline: sanityHome?.headline || home.headline,
    subline: sanityHome?.subline || home.subline,
    featured: {
      ...home.featured,
      display: sanityHome?.featuredDisplay ?? home.featured.display,
      title: sanityHome?.featuredTitle || home.featured.title,
      href: sanityHome?.featuredHref || home.featured.href,
    }
  };

  const displayPerson = {
    ...person,
    name: sanityPerson?.name || person.name,
    role: sanityPerson?.role || person.role,
    avatar: sanityPerson?.avatar ? urlForImage(sanityPerson.avatar).url() : person.avatar,
  };

  const displayAbout = {
    ...about,
    title: sanityAbout?.title || about.title,
  };

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={displayHome.path}
        title={displayHome.title}
        description={displayHome.description}
        image={`/api/og/generate?title=${encodeURIComponent(displayHome.title)}`}
        author={{
          name: displayPerson.name,
          url: `${baseURL}${displayAbout.path}`,
          image: `${baseURL}${displayPerson.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {displayHome.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={displayHome.featured.href}
              >
                <Row paddingY="2">{displayHome.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {displayHome.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {displayHome.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={displayAbout.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {displayAbout.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={displayPerson.avatar}
                    size="m"
                  />
                )}
                {displayAbout.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Projects range={[2]} />
      <Mailchimp />
    </Column>
  );
}
