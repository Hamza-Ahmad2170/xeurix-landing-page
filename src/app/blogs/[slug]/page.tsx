"use client";
import { useParams } from "next/navigation";
import blogsData from "@/json/blogs";
import world from "../../../../public/images/bigger-worlds.webp";
import Image from "next/image";
import Link from "next/link";

function BlogSingle() {
  const { slug } = useParams();
  const blogData = blogsData.find((blog) => blog.slug === slug);

  return (
    <div className="py-10">
      <div className="container">
        <Image src={world} alt="blog" />
        <div className="pt-10">
          <h1 className="text-[1.75rem]">{blogData?.title}</h1>
          <article className="text-sm font-light text-[#272b41]">
            <h2 className="py-2 text-[2.5rem] leading-tight">
              NETSOL Cloud Services Achieves AWS Lambda Service Delivery
              Designation
            </h2>
            <Link
              href="https://d1io3yog0oux5.cloudfront.net/_bc7b5f9feab1b52b9e1067fd3ba64eb1/netsoltech/news/2023-07-17_NETSOL_Cloud_Services_Achieves_AWS_Lambda_Service__3193.pdf"
              title="PDF: NETSOL Cloud Services Achieves AWS Lambda Service Delivery Designation"
              target="_blank"
              className="text-[#29abe2] underline"
            >
              Download as PDF
            </Link>
            <time
              dateTime="2023-07-17 08:30:00"
              className="date pull-left pl-1"
            >
              July 17, 2023
            </time>
            <div className="space-y-5">
              <p>
                ENCINO, Calif., July 17, 2023 (GLOBE NEWSWIRE) -- NETSOL Cloud
                Services, a leading provider of cloud-based solutions and a
                division of NETSOL Technologies, Inc. (Nasdaq: NTWK), is pleased
                to announce that it has been awarded the AWS Lambda Service
                Delivery designation by Amazon Web Services (AWS). This
                prestigious recognition acknowledges NETSOL Cloud Service&apos;s
                expertise and successful implementation of AWS Lambda, enabling
                organizations to build and deploy scalable serverless
                applications efficiently.
              </p>
              <p>
                AWS Lambda allows businesses to run code without provisioning or
                managing servers, providing a flexible and scalable platform for
                developing modern applications. NETSOL Cloud Services has
                demonstrated deep expertise in leveraging AWS Lambda to help
                businesses improve agility, reduce infrastructure costs,
                accelerate time-to-market for their applications, and utilize
                the power of serverless computing to manage infrastructure more
                efficiently.
              </p>
              <p>
                “We’re thrilled to receive the AWS Lambda Service Delivery
                designation,” commented Peter Minshall, Executive Vice
                President. “This recognition validates our expertise in
                leveraging AWS Lambda to enable organizations to harness the
                power of serverless computing. As an APN Consulting Partner,
                NETSOL Cloud Services remains dedicated to delivering
                exceptional value to its customers and helping them navigate
                their cloud journey with confidence by optimizing their
                infrastructure and driving innovation.”
              </p>
            </div>
            <div className="space-y-5 pt-5">
              <h3 className="font-bold">About NETSOL Cloud Services</h3>
              <p>
                NETSOL Cloud Services is a leading provider of cloud services,
                offering a comprehensive range of solutions designed to help
                businesses of all sizes leverage the power of the cloud to
                achieve their goals. Our cloud services are built on a highly
                scalable and reliable infrastructure, powered by
                industry-leading technologies and backed by a team of expert
                engineers and support staff.
              </p>
              <p>
                Visit us at
                <Link
                  href="https://www.globenewswire.com/Tracker?data=hJmYUEol_hmpS0n23zGPiprqoiky57Ib76ZIfi2g7WiM0YZTb1yeFi93v7sxj2_FhgUsj3c5j5TuQwgwyW_BhQM4TSl4sFuvppFwepsg17aBbLYcjh9-KKSpbzq2G6N1"
                  rel="nofollow"
                  target="_blank"
                  className="pl-2 text-[#29abe2] underline"
                >
                  https://netsolcloudservices.com/
                </Link>
              </p>
            </div>
            <div className="space-y-5 pt-5">
              <h3 className="font-bold">About NETSOL Technologies</h3>
              <p>
                NETSOL Technologies, Inc. (Nasdaq: NTWK) is a worldwide provider
                of IT and enterprise software solutions primarily serving the
                global leasing and finance industry. The Company’s suite of
                applications is backed by 40 years of domain expertise and
                supported by a committed team of more than 1750 professionals
                placed in eight strategically located support and delivery
                centers throughout the world. NFS, LeasePak, LeaseSoft or NFS
                Ascent – help companies transform their Finance and Leasing
                operations, providing a fully automated asset-based finance
                solution covering the complete leasing and finance lifecycle.
              </p>
            </div>
            <div className="space-y-5 pt-5">
              <h3 className="font-bold italic">Forward-Looking Statements</h3>
              <p className="italic">
                This press release may contain forward-looking statements
                relating to the development of the Company&apos;s products and
                services and future operation results, including statements
                regarding the Company that are subject to certain risks and
                uncertainties that could cause actual results to differ
                materially from those projected. The words “expects,”
                “anticipates,” variations of such words, and similar
                expressions, identify forward-looking statements within the
                meaning of the Private Securities Litigation Reform Act of 1995,
                but their absence does not mean that the statement is not
                forward-looking. These statements are not guarantees of future
                performance and are subject to certain risks, uncertainties, and
                assumptions that are difficult to predict. Factors that could
                affect the Company&apos;s actual results include the progress
                and costs of the development of products and services and the
                timing of the market acceptance. The subject Companies expressly
                disclaim any obligation or undertaking to update or revise any
                forward-looking statement contained herein to reflect any change
                in the company&apos;s expectations with regard thereto or any
                change in events, conditions or circumstances upon which any
                statement is based.
              </p>
            </div>
            <div className="space-y-5 pt-5">
              <h4 className="font-bold">Media Contact:</h4>
              <ul>
                <li>Mahnoor Bhatti</li>
                <li>Marketing and Brand Manager</li>
                <li>NETSOL Cloud Services</li>
                <li>
                  Email:{" "}
                  <Link
                    href="https://www.globenewswire.com/Tracker?data=R-911BPnNcQqfYeyhE3k8ygU0ME4mYZyTzHf5Jdw6K8ZSw3RYjRGQI8Z5Srf9DcDuR2eudwGEZDEy9BqLm37hSrCVIhrgVGPPgUGEV6JAIMPN7jr5JmhPbwn1VfOcZMZ"
                    rel="nofollow"
                    target="_blank"
                    className="text-[#29abe2] underline"
                  >
                    mahnoor.bhatti@netsoltech.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-5 pt-5">
              <h4 className="font-bold">Investor Relations Contact</h4>
              <ul>
                <li>IMS Investor Relations</li>
                <li>
                  <Link
                    href="https://www.globenewswire.com/Tracker?data=97RQdlb5CLGFojVf2fz-X6bV2z3kuEmFvZL9ou17SM4z4rqYJAYzi1km0OM3j-lRcNgejxiLrWRfE46x8Sh4ypuhyBw9IlsMzWnRM7RrcQkONccYi6259NwUbY4kOlkt"
                    rel="nofollow"
                    target="_blank"
                    className="text-[#29abe2] underline"
                  >
                    netsol@imsinvestorrelations.com
                  </Link>
                </li>
                <li>+1 203-972-9200</li>
              </ul>
            </div>
            <div className="space-y-5 pt-10">
              <Link href="https://www.globenewswire.com/NewsRoom/AttachmentNg/8a9cd86b-b904-4a20-a55d-9bc05eaca7a6">
                <Image
                  src="https://ml.globenewswire.com/media/8a9cd86b-b904-4a20-a55d-9bc05eaca7a6/small/netsol-logo-png"
                  width="123"
                  height="150"
                  alt="Primary Logo"
                />
              </Link>
              <ul>
                <li>Source: NETSOL Technologies Inc. </li>
                <li>Released July 17, 2023</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default BlogSingle;
