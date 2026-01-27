// iOS Memory Management Fix
import Foundation
import WebKit

class MemoryManager {
    static let shared = MemoryManager()
    private var webViewCache = NSCache<NSString, WKWebView>()

    func optimizeMemory() {
        webViewCache.removeAllObjects()
        URLCache.shared.removeAllCachedResponses()
    }

    deinit {
        NotificationCenter.default.removeObserver(self)
    }
}
