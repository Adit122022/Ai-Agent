import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import goggleService from '../services/google.service.js'
const server = new McpServer({
  name: "example-server",
  version: "1.0.0"
});

// ... set up server resources, tools, and prompts ...

// server.tool("sendmail" , "send a mail to a  emailAddress" , object , callbackk )
server.tool("sendmail" , "send a mail to a  emailAddress" , {
userid : z.string(),
to : z.string(),
subject : z.string(),
message : z.string(),

} , async({userid, to, subject,message})=>{
    try {await goggleService.sendEmail({userid,to,subject,message})
     return "mail send succesfull"
        
    } catch (error) {
        console.log("main js of  mcp -->",error)
    }
} )

const transport = new StdioServerTransport();  // json RP protocol k through
await server.connect(transport);